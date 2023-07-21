using LibraryManagement.Data;
using LibraryManagement.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly LibraryManagementDbContext _context;

        public OrderController(LibraryManagementDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            var orders = await _context.Orders.ToListAsync();
            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Order order)
        {
            order.DateOfRent = DateTime.Now;
            order.IsReturn = false;
            await UpdateQuantity(order.BookId, order.IsReturn);
            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();

            return Ok(order);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id)
        {
            var order = await _context.Orders.FindAsync(id);
            order.DateOfReturn = DateTime.Now;
            order.IsReturn = true;
            await UpdateQuantity(order.BookId, order.IsReturn);
            await _context.SaveChangesAsync();

            return Ok(order);
        }


        public async Task<IActionResult> UpdateQuantity(Guid bookId, bool isReturn)
        {
            var book = await _context.Books.FindAsync(bookId);

            if (book == null) return NotFound();

            if (isReturn) book.Quantity++;
            else book.Quantity--;

            await _context.SaveChangesAsync();
            return Ok(book);
        }
    }
}
