Feature: Wishlist on the Westwing website

  Scenario: As a user, I can add and delete the product from wishlist
   Given I am on the westwingnow home page
   When I search for item
   | search_item | möbel |
   Then I should see product listing page with a list of products
   | search_item | Möbel |
   When I click on wishlist icon of the first found product
   Then I should see the login/registration overlay
   When I switch to login form of the overlay
   And I log in with credentials
   | user_name | harry1@gmail.com |
   | password | Westwing@123 |
   Then wishlist icon on the product is filled in
   And wishlist counter in the website header shows counter
   Then I go to the wishlist page 
   And I delete the product from my wishlist
   