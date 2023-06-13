using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Bulky.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [DisplayName("Category Name")]
        [StringLength(maximumLength: 100, MinimumLength = 1, ErrorMessage = "Category name must have 1-100 characters")]
        public string? Name { get; set; }
        [DisplayName("Display Order")]
        [Range(1, 100, ErrorMessage = "Display Order number must be betwen 1-100")]
        public int DisplayOrder { get; set; }
    }
}
