
// hashing of password is very important 
// because if we store password in plain text in db , if db is hacked 
// all the passwords will be leaked 
// so we use hashing to store password securely
// hashing is a one way function // canaot go from hash value to password
// we can hash a password to get a hash value
// but we cannot get the original password from the hash value
// even if db is hacked , only hash values are leaked
// and its very difficult to get original password from hash value
// so its secure
