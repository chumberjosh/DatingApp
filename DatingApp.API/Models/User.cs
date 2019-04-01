namespace DatingApp.API.Models
{
    public class User
    {
        public int Id { get; set; }
        // the ids are stored as numbers so they are integer
        public string Username { get; set; }
        // the usernames can be letters and numbers so they will be a string
        public byte[] PasswordHash { get; set; }        // This scrambles the password into a 'hash' but it is easy to decrypt
                                                        // and if two users have the same password it will be the same hash
        public byte[] PasswordSalt { get; set; }        // This adds a 'salt' onto the hash and edits it so it is harder to decrypt
                                                        // and it will be different even if two users have the same password
    }
}