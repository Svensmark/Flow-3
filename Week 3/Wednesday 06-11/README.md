## Questions and answers:


Q: Did this logout involve the server?
A: No, this is all client side, as when you log out you simply remove your token from
	the local storage.

Q: Is the token (if kept somewhere, still valid?)
A: Yes it is still valid, since when you delete it from the local storage, it has no
	effect on the validation of the server authorization.

Q: If your  answer to the question above was yes, is this a problem?, and if, 
	how could it have been solved?
A: You could create a token blacklist, so that whenever logged out, your token will be
	blacklisted from further use.
