import { render, screen } from "@testing-library/react";
import { FollowersList } from "..";

describe("FollowersList component test", () => {
  it("should render the first follower in the list", async () => {
    render(<FollowersList />);

    const followerDivElement: HTMLDivElement = await screen.findByTestId(
      "follower-item-0"
    );

    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render a list of 5 followers.", async () => {
    render(<FollowersList />);

    const followerDivElements: HTMLDivElement[] = await screen.findAllByTestId(
      /follower-item/i
    );

    expect(followerDivElements.length).toBe(3);
  });
});
