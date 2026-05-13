import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UsersClient from "@/components/users/UsersClient";

const mockUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne@example.com",
    phone: "123",
    website: "leanne.dev",
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
    totalPosts: 10,
    completedTodos: 11,
    pendingTodos: 9,
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin@example.com",
    phone: "456",
    website: "ervin.dev",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
    totalPosts: 10,
    completedTodos: 8,
    pendingTodos: 12,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "clementine@example.com",
    phone: "789",
    website: "clementine.dev",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
    totalPosts: 10,
    completedTodos: 7,
    pendingTodos: 13,
  },
];

describe("UsersClient", () => {
  it("renders users with activity signals", () => {
    render(<UsersClient users={mockUsers} />);

    expect(screen.getAllByText("Leanne Graham").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Ervin Howell").length).toBeGreaterThan(0);

    expect(screen.getByText("Total Users")).toBeInTheDocument();
    expect(screen.getByText("Total Posts")).toBeInTheDocument();
    expect(screen.getByText("Completed Todos")).toBeInTheDocument();
    expect(screen.getByText("Pending Todos")).toBeInTheDocument();

  expect(screen.getByText("30")).toBeInTheDocument();
  expect(screen.getByText("26")).toBeInTheDocument();
  expect(screen.getByText("34")).toBeInTheDocument();
  });

  it("filters users by search input", async () => {
    const user = userEvent.setup();

    render(<UsersClient users={mockUsers} />);

    const searchInput = screen.getByPlaceholderText(
      /search users by name or email/i
    );

    await user.type(searchInput, "Leanne");

    expect(screen.getAllByText("Leanne Graham").length).toBeGreaterThan(0);
    expect(screen.queryByText("Ervin Howell")).not.toBeInTheDocument();
    expect(screen.queryByText("Clementine Bauch")).not.toBeInTheDocument();
  });

  it("shows empty state when no users match search", async () => {
    const user = userEvent.setup();

    render(<UsersClient users={mockUsers} />);

    const searchInput = screen.getByPlaceholderText(
      /search users by name or email/i
    );

    await user.type(searchInput, "unknown user");

    expect(screen.getByText(/no users found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/try adjusting your search or filters/i)
    ).toBeInTheDocument();
  });

  it("filters users with high pending todos", async () => {
    const user = userEvent.setup();

    render(<UsersClient users={mockUsers} />);

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(screen.queryByText("Leanne Graham")).not.toBeInTheDocument();
    expect(screen.getAllByText("Ervin Howell").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Clementine Bauch").length).toBeGreaterThan(0);
  });

  it("sorts users by most pending todos", async () => {
    const user = userEvent.setup();

    render(<UsersClient users={mockUsers} />);

    await user.click(screen.getByRole("button", { name: /name a-z/i }));
    await user.click(screen.getByRole("menuitem", { name: /most pending/i }));

    const rows = screen.getAllByRole("row");

    expect(rows[1]).toHaveTextContent("Clementine Bauch");
  });
});