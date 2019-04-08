using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
         void Add<T>(T entity) where T: class;
         // add a type of T (T in this case is a user or photo) and take the entity as its perameter and constrain it to just classes
         // This just saves typing because we're only creating one method for photos and users
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         // when we change our data to the database there will either be 0 changes or multiple changes which is why we use a boolean
         // we check to see if there is more than 1 saved back to the databas, if it returns true then it has saved data
         // if it returns false there was no data to save or there has been an error saving the data 
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}