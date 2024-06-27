Passwords can be encrypted for moreand better security(cipher)

Various cupher methods are there but they are not that strong as they contain the cipher key which can be easily hacked upon

Thus to avoid using keys, Hash Functions used- require no key and generate the same hash for the same input
But can be easliy breaked using Hash tables and knowledge of hashing algorithm(MD-5 is commonly used one)

Thus to prevent attack by hash tables, Salting is used

Input + Salt => Hash => Unique Hash
Salt is randomised