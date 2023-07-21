namespace LibraryManagement.Entities
{
    public class Role
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string Description { get; set; }
    }
}
