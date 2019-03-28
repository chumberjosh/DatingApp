// ---------------------------------------- This is the file that creates the database
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        //1st method - contains all the information EntityFramework needs to create and edit the database and tables
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(               // create a table
                name: "Values",                         // called values
                columns: table => new                   // create a colum for each of these (there are only 2 so only 2 will be created)
                {
                    Id = table.Column<int>(nullable: false)         // one for the Id - it will use information
                        .Annotation("Sqlite:Autoincrement", true),  // this one is a sqlite auto increment column
                    Name = table.Column<string>(nullable: true)     // one for the name - it will create it based on the other property
                                                                    // in our values class
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Values", x => x.Id);       // it will use the Id as the primary key
                });
        }
         // this does the opposite of the up method:
         //  + it drops the table named values
        protected override void Down(MigrationBuilder migrationBuilder)    
        {
            migrationBuilder.DropTable(
                name: "Values");
        }
    }
}
