using LibraryManagement.Data;
using LibraryManagement.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly LibraryManagementDbContext _context;
        public BookController(LibraryManagementDbContext context) 
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            var books = await _context.Books.ToListAsync();
            return Ok(books);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Book book)
        {
            book.Id = Guid.NewGuid();
            await _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();

            return Ok(book);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            var book = await _context.Books.FirstOrDefaultAsync(x => x.Id == id);

            if(book ==null)
                return NotFound();

            return Ok(book);
        }
    }
}
