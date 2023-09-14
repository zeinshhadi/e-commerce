
1. *User Schema:*
   - `_id` (MongoDB-generated unique identifier)
   - `username`
   - `email`
   - `password` (hashed)
   - `name`
   - `phone number`
   - `location`
   - `profile image`
   - `role` (user, admin, or moderator)
   - `posts` (an array of references to the listings the user has posted)
   - `purchases` (an array of references to the listings the user has purchased)
   - `favorites` (an array of references to favorite listings)
   
2. *Listing Schema:*
   - `_id`
   - `title`
   - `description`
   - `price`
   - `category` (could be a reference to a Category collection or an array of category tags)
   - `seller` (reference to the User who posted the listing)
   - `location`
   - `images` (an array of image URLs)
   - `date posted`
   - `views` (to track how many times the listing has been viewed)
   - `status` (e.g., active, sold, expired)
   - `adminApprovalStatus` (e.g., pending, approved, denied)
   - `adminApprover` (reference to the admin who approved or denied the post)

3. *Category Schema (Optional):*
   - `_id`
   - `name`
   - `parent category` (for hierarchical categories)

4. *Message Schema (for user-to-user communication):*
   - `_id`
   - `sender` (reference to the User sending the message)
   - `receiver` (reference to the User receiving the message)
   - `content`
   - `timestamp`
   - `isRead` (to track whether the message has been read)

5. *Admin Schema:*
   - `_id`
   - `username`
   - `email`
   - `password` (hashed)
   - `name`
   - `role` (admin)
   
6. *Report Schema (for reporting listings):*
   - `_id`
   - `listing` (reference to the reported listing)
   - `reporter` (reference to the User reporting the listing)
   - `reason`
   - `timestamp`
   - `status` (e.g., open, resolved)

*Order Schema:*

- `_id` (MongoDB-generated unique identifier)
- `buyer` (reference to the User who made the purchase)
- `seller` (reference to the User who sold the item)
- `items` (an array of objects, each representing a purchased item)
   - `listing` (reference to the Listing being purchased)
   - `quantity`
   - `total price`
- `status` (e.g., pending payment, processing, shipped, delivered)
- `payment method` (e.g., credit card, PayPal, cash on delivery)
- `shipping address`
- `order date`
- `payment date`
- `estimated delivery date`
- `tracking number` (if applicable for shipping)
- `feedback` (optional, for both buyers and sellers to leave reviews or comments about the transaction)
- `rating` (optional, for both buyers and sellers to rate each other)