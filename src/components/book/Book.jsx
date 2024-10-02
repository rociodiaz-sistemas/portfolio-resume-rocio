import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      totalPage: 0,
    };

    this.flipBook = React.createRef();
  }

  componentDidMount() {
    if (this.flipBook.current) {
      const pageFlip = this.flipBook.current.pageFlip();
    }
  }

  nextButtonClick = () => {
    if (this.flipBook.current) {
      this.flipBook.current.pageFlip().flipNext();
    }
  };

  prevButtonClick = () => {
    if (this.flipBook.current) {
      this.flipBook.current.pageFlip().flipPrev();
    }
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

  render() {
    return (
      <div>
        <HTMLFlipBook
          width="90vw"
          height="90vh"
          size="fixed"
          minWidth="90vw"
          maxWidth="90vw"
          minHeight="90vh"
          maxHeight="90vh"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          ref={this.flipBook}
        >
          <PageCover>Rory's CV</PageCover>
          <Page number={1}>Lorem ipsum...</Page>
          <Page number={2}>Lorem ipsum...</Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>

        <div className="container">
          <div>
            <button type="button" onClick={this.prevButtonClick}>
              Previous page
            </button>
            <span>
              {this.state.page + 1} of {this.state.totalPage}
            </span>
            <button type="button" onClick={this.nextButtonClick}>
              Next page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
export { Page, PageCover };
