using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryManagement.Entities
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public Guid BookId { get; set; }
        public string Title { get; set; }
        //public int Quantity { get; set; }
        public DateTime DateOfRent { get; set; }
        public DateTime? DateOfReturn { get; set;}
        public bool IsReturn { get; set; }
    }
}
