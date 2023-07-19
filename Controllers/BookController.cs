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

        //[HttpGet]
        //public async Task<IActionResult> GetList() { 
        //    var book = await _context.Books.ToListAsync();
        //    return Ok(book);
        //}

        public IEnumerable<Book> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Book
            {
                Id = Guid.NewGuid(),
                Title = "Nguyen",
                Author = "Trong",
                Quantity = 1,
                Price = 1,
                Description = null,
            })
            .ToArray();
        }
    }
}
