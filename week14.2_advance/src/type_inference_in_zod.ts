
// we use zod for runtime validation 
// type inference in zod , when we are accepecting something from reqbody from user we want to validate it and also want to get the type of it



/// how to infer type given a zod schema
// the zod object we created is a runtime object but we can also infer the type of it using zod's infer method
// 


// Importing necessary libraries
import { z } from 'zod';  // Zod for schema validation
import express from "express";  // Express for the web server

// Initializing the Express app
const app = express();

// Define the schema for profile update using Zod
const userProfileSchema = z.object({
  name: z.string().min(1),  // Name must be a non-empty string
  email: z.string().email(),  // Email must be a valid email address
  age: z.number().min(18).optional(),  // Age is optional but must be 18 or older if provided
});

// Type inference for the FinalUserSchema from the userProfileSchema
export type FinalUserSchema = z.infer<typeof userProfileSchema>;

// Define the PUT endpoint for updating user data
app.put("/user", (req, res) => {
  // Safe parsing of the request body according to the defined schema
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body;

  // If the validation fails, return a 411 status code (Length Required)
  if (!success) {
    res.status(411).json({});  // Send empty response in case of validation failure
    return;
  }

  // Placeholder for updating the database with the validated data
  // Update the user in the database here using updateBody data

  // Respond with a success message after updating the user
  res.json({
    message: "User updated"  // Send success message
  });
});

// Start the Express app on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');  // Log when the server is ready
});