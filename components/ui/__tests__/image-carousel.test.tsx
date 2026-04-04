import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageCarousel } from "../image-carousel";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock embla-carousel-react
const mockScrollPrev = jest.fn();
const mockScrollNext = jest.fn();
const mockScrollTo = jest.fn();
const mockCanScrollPrev = jest.fn(() => true);
const mockCanScrollNext = jest.fn(() => true);
const mockSelectedScrollSnap = jest.fn(() => 0);
const mockOn = jest.fn();
const mockOff = jest.fn();

jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => [
    jest.fn(),
    {
      scrollPrev: mockScrollPrev,
      scrollNext: mockScrollNext,
      scrollTo: mockScrollTo,
      canScrollPrev: mockCanScrollPrev,
      canScrollNext: mockCanScrollNext,
      selectedScrollSnap: mockSelectedScrollSnap,
      on: mockOn,
      off: mockOff,
    },
  ],
}));

const singleImage = [
  { src: "https://example.com/image1.webp", alt: "Screenshot 1" },
];

const multipleImages = [
  { src: "https://example.com/image1.webp", alt: "Screenshot 1" },
  { src: "https://example.com/image2.webp", alt: "Screenshot 2" },
  { src: "https://example.com/image3.webp", alt: "Screenshot 3" },
];

describe("ImageCarousel", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCanScrollPrev.mockReturnValue(true);
    mockCanScrollNext.mockReturnValue(true);
    mockSelectedScrollSnap.mockReturnValue(0);
  });

  describe("single image", () => {
    it("renders a plain image without carousel controls", () => {
      render(<ImageCarousel images={singleImage} />);

      expect(screen.getByAltText("Screenshot 1")).toBeInTheDocument();
      expect(screen.queryByRole("region")).not.toBeInTheDocument();
      expect(screen.queryByLabelText("Previous image")).not.toBeInTheDocument();
      expect(screen.queryByLabelText("Next image")).not.toBeInTheDocument();
    });
  });

  describe("multiple images", () => {
    it("renders carousel with all images", () => {
      render(<ImageCarousel images={multipleImages} />);

      expect(screen.getByAltText("Screenshot 1")).toBeInTheDocument();
      expect(screen.getByAltText("Screenshot 2")).toBeInTheDocument();
      expect(screen.getByAltText("Screenshot 3")).toBeInTheDocument();
    });

    it("renders prev and next buttons", () => {
      render(<ImageCarousel images={multipleImages} />);

      expect(screen.getByLabelText("Previous image")).toBeInTheDocument();
      expect(screen.getByLabelText("Next image")).toBeInTheDocument();
    });

    it("renders correct number of dot indicators", () => {
      render(<ImageCarousel images={multipleImages} />);

      expect(screen.getByLabelText("Go to image 1")).toBeInTheDocument();
      expect(screen.getByLabelText("Go to image 2")).toBeInTheDocument();
      expect(screen.getByLabelText("Go to image 3")).toBeInTheDocument();
    });

    it("calls scrollNext when next button is clicked", () => {
      render(<ImageCarousel images={multipleImages} />);

      fireEvent.click(screen.getByLabelText("Next image"));
      expect(mockScrollNext).toHaveBeenCalled();
    });

    it("calls scrollPrev when prev button is clicked", () => {
      render(<ImageCarousel images={multipleImages} />);

      fireEvent.click(screen.getByLabelText("Previous image"));
      expect(mockScrollPrev).toHaveBeenCalled();
    });

    it("calls scrollTo when a dot is clicked", () => {
      render(<ImageCarousel images={multipleImages} />);

      fireEvent.click(screen.getByLabelText("Go to image 2"));
      expect(mockScrollTo).toHaveBeenCalledWith(1);
    });

    it("hides prev button when cannot scroll prev", () => {
      mockCanScrollPrev.mockReturnValue(false);
      render(<ImageCarousel images={multipleImages} />);

      const prevButton = screen.getByLabelText("Previous image");
      expect(prevButton).toHaveClass("opacity-0");
      expect(prevButton).toHaveClass("pointer-events-none");
    });

    it("hides next button when cannot scroll next", () => {
      mockCanScrollNext.mockReturnValue(false);
      render(<ImageCarousel images={multipleImages} />);

      const nextButton = screen.getByLabelText("Next image");
      expect(nextButton).toHaveClass("opacity-0");
      expect(nextButton).toHaveClass("pointer-events-none");
    });

    it("has correct accessibility attributes", () => {
      render(<ImageCarousel images={multipleImages} />);

      const carousel = screen.getByRole("region");
      expect(carousel).toHaveAttribute("aria-roledescription", "carousel");
      expect(carousel).toHaveAttribute("aria-label", "Project screenshots");
    });
  });
});
