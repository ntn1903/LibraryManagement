using LibraryManagement.Data;
using LibraryManagement.Entities;
using LibraryManagement.Modelssss;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly LibraryManagementDbContext _context;

        public UserController(LibraryManagementDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] User user)
        {
            user.Id = Guid.NewGuid();
            user.Role = "admin";
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (user == null)
                return NotFound();

            return Ok(user);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLogin user)
        {
            var u = await _context.Users.Where(u => u.Username == user.Username.ToLower() && u.Password == user.Password).FirstOrDefaultAsync();
            if (u != null) return Ok(u);
            return Ok(false); ;
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, User user)
        {
            var u = await _context.Users.FindAsync(id);
            if (u == null)
                return NotFound();
            u.Name = user.Name;
            u.Email = user.Email;
            u.Username = user.Username;
            u.Password = user.Password;
            u.Role = user.Role;
            u.Budget = user.Budget;

            await _context.SaveChangesAsync();
            return Ok(u);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return NotFound();

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
