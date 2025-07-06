// Signup
export function signupUser(username: string, password: string) {
  return fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
}

// Login
export function loginUser(username: string, password: string) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
}

// Get all blogs
export function getAllBlogs() {
  return fetch("/api/blogs", {
    method: "GET",
  });
}

// Get a single blog
export function getBlog(id: string) {
  return fetch(`/api/blogs/${id}`, {
    method: "GET",
  });
}

// Create a new blog
export function createBlog(title: string, content: string) {
  return fetch("/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });
}

// Update a blog
export function updateBlog(id: string, title: string, content: string) {
  return fetch(`/api/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });
}

// Delete a blog
export function deleteBlog(id: string) {
  return fetch(`/api/blogs/${id}`, {
    method: "DELETE",
  });
}