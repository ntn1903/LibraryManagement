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
        public async Task<IActionResult> Create([FromBody] Book book)
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

            if (book == null)
                return NotFound();

            return Ok(book);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, Book book)
        {
            var b = await _context.Books.FindAsync(id);
            if (b == null)
                return NotFound();
            b.Title = book.Title;
            b.Author = book.Author;
            b.Quantity = book.Quantity;
            b.Price = book.Price;
            b.Description = book.Description;

            await _context.SaveChangesAsync();
            return Ok(b);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
                return NotFound();

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
            return Ok();
        }

        //[HttpGet]
        //[Route("get-by-ids")]
        //public async Task<IActionResult> GetListById(List<Guid> listId)
        //{
        //    var books = await _context.Books.Where(m=> listId.Contains(m.Id)).ToListAsync();
        //    return Ok(books);
        //}

    }
}
