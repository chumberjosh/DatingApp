using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext _context;
        public DatingRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        } // We're not using Async because it's being saved to the local memory until we actuallly update the database

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync( u => u.Id == id);

            return user;
            // we pass the Id which is used to extract the first or default from our database that matches the Id we are passing in
            // if we dont have a matching Id in the database then we return the default which is null.
            // but if we do find one it will return as 'user'
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(p => p.Photos).ToListAsync();

            return users;
        } // when we return the users we want to show their main photo

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        } // if it is 1 or more then there have been changes saved to the database but if there are 0 then there are no changes
        // if there are changes it will be true but if there aren't then it will be false.
    }
}