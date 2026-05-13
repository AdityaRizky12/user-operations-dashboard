import { render, screen } from "@testing-library/react";

import AddressSection from "@/components/user-details/AddressSection";
import CompanySection from "@/components/user-details/CompanySection";
import PostsSection from "@/components/user-details/PostsSection";
import TodosSection from "@/components/user-details/TodosSection";
import UserProfileCard from "@/components/user-details/UserProfileCard";

const mockUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "leanne@example.com",
  phone: "1-770-736-8031",
  website: "hildegard.org",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: "First post title",
    body: "This is the first post body",
  },
  {
    userId: 1,
    id: 2,
    title: "Second post title",
    body: "This is the second post body",
  },
];

const mockTodos = [
  {
    userId: 1,
    id: 1,
    title: "Completed todo",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "Pending todo",
    completed: false,
  },
];

describe("User details components", () => {
  it("renders user profile details", () => {
    render(<UserProfileCard user={mockUser} />);

    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("@Bret")).toBeInTheDocument();
    expect(screen.getByText("leanne@example.com")).toBeInTheDocument();
    expect(screen.getByText("1-770-736-8031")).toBeInTheDocument();
    expect(screen.getByText("hildegard.org")).toBeInTheDocument();
  });

  it("renders company section", () => {
    render(<CompanySection company={mockUser.company} />);

    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Romaguera-Crona")).toBeInTheDocument();
    expect(
      screen.getByText("Multi-layered client-server neural-net")
    ).toBeInTheDocument();
  });

  it("renders address section", () => {
    render(<AddressSection address={mockUser.address} />);

    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Kulas Light")).toBeInTheDocument();
    expect(screen.getByText("Apt. 556")).toBeInTheDocument();
    expect(screen.getByText(/Gwenborough/i)).toBeInTheDocument();
    expect(screen.getByText(/92998/i)).toBeInTheDocument();
  });

  it("renders posts section", () => {
    render(<PostsSection posts={mockPosts} />);

    expect(screen.getByText("Posts")).toBeInTheDocument();
    expect(screen.getByText("First post title")).toBeInTheDocument();
    expect(screen.getByText("Second post title")).toBeInTheDocument();
  });

  it("renders todos section with completed and pending status", () => {
    render(<TodosSection todos={mockTodos} />);

    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Completed todo")).toBeInTheDocument();
    expect(screen.getByText("Pending todo")).toBeInTheDocument();

    expect(screen.getByText("Done")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();

    expect(
      screen.getByText(/1 completed, 1 pending/i)
    ).toBeInTheDocument();
  });
});