import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Nav,
  Tab,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import product3 from "../../assets/img/products/product-3.png";
import product4 from "../../assets/img/products/product-4.png";
import product5 from "../../assets/img/products/product-5.png";
import product7 from "../../assets/img/products/product-7.png";
import product9 from "../../assets/img/products/product-9.png";
import product11 from "../../assets/img/products/product-11.png";

import productDetail1 from "../../assets/img/products/product-detail-1.png";
import productDetail2 from "../../assets/img/products/product-detail-2.png";
import productDetail3 from "../../assets/img/products/product-detail-3.png";
import productDetail4 from "../../assets/img/products/product-detail-4.png";
import {
  Camera,
  Cog,
  Database,
  ShoppingBag,
  ShoppingCart,
  SmartphoneCharging,
} from "lucide-react";

const Details = () => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xl={7} xxl={6}>
            <Tab.Container defaultActiveKey="product-1">
              <Row>
                <Col sm={4} md={3} xxl={2}>
                  <Nav
                    variant="outline"
                    className="flex-column"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="product-1" className="mb-2">
                        <img
                          src={productDetail1}
                          alt=""
                          className="img-fluid mx-auto d-block rounded mh-75px"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="product-2" className="mb-2">
                        <img
                          src={productDetail2}
                          alt=""
                          className="img-fluid mx-auto d-block rounded mh-75px"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="product-3" className="mb-2">
                        <img
                          src={productDetail3}
                          alt=""
                          className="img-fluid mx-auto d-block rounded mh-75px"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="product-4" className="mb-2">
                        <img
                          src={productDetail4}
                          alt=""
                          className="img-fluid mx-auto d-block rounded mh-75px"
                        />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={8} md={9} xxl={9} offset-xxl={1}>
                  <Tab.Content className="p-3">
                    <Tab.Pane eventKey="product-1">
                      <img
                        src={productDetail1}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="product-2">
                      <img
                        src={productDetail2}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="product-3">
                      <img
                        src={productDetail3}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="product-4">
                      <img
                        src={productDetail4}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <Col xl={5} xxl={6}>
            <div className="mt-3">
              <span className="text-primary">Smartphones</span>
              <h4 className="mt-1 mb-4">Apple iPhone 15 Pro Max</h4>
              <p className="mb-3">
                <FontAwesomeIcon icon={faStar} className="text-warning me-1" />{" "}
                4.6
                <span className="text-muted ms-1">out of 40 reviews</span>
              </p>
              <h5 className="mb-3">Price: $1499 USD</h5>
              <p className="text-muted mb-4">
                Introducing the Apple iPhone 15 Pro Max 256GB in Blue Titanium.
                Experience unparalleled performance with the lightning-fast A17
                Pro chip, perfect for gaming and seamless multitasking. Capture
                stunning photos and videos with the triple-lens camera system,
                including standard, wide-angle, and telephoto lenses, complete
                with Night mode for low-light shots.
              </p>
              <Row className="mb-3">
                <Col md={6}>
                  <p className="text-muted">
                    <Database className="me-1" />
                    <span className="align-middle">Storage: 256 GB</span>
                  </p>
                  <p className="text-muted">
                    <SmartphoneCharging className="me-1" />
                    <span className="align-middle">Battery: 29 hours</span>
                  </p>
                </Col>
                <Col md={6}>
                  <p className="text-muted">
                    <Camera className="me-1" />
                    <span className="align-middle">Megapixels: 48 MP</span>
                  </p>
                  <p className="text-muted">
                    <Cog className="me-1" />
                    <span className="align-middle">Warranty: 24 Months</span>
                  </p>
                </Col>
              </Row>
              <Button variant="primary" className="mb-3 me-1">
                <ShoppingBag className="me-1" />
                <span className="align-middle">Buy now</span>
              </Button>
              <Button variant="light" className="mb-3">
                <ShoppingCart className="me-1" />
                <span className="align-middle">Add to cart</span>
              </Button>
              <h5>Color:</h5>
              <Nav
                variant="outline"
                className="mb-3"
                role="tablist"
                aria-orientation="horizontal"
              >
                <div className="me-3 text-center">
                  <Nav.Link className="nav-link active p-1 mb-1 w-75px h-75px">
                    <img
                      src={product4}
                      alt=""
                      className="img-fluid mx-auto d-block rounded w-50px mb-1"
                    />
                  </Nav.Link>
                  <p className="mb-0">Blue</p>
                </div>
                <div className="me-3 text-center">
                  <Nav.Link className="nav-link p-1 mb-1 w-75px h-75px">
                    <img
                      src={product5}
                      alt=""
                      className="img-fluid mx-auto d-block rounded w-50px mb-1"
                    />
                  </Nav.Link>
                  <p className="mb-0">White</p>
                </div>
                <div className="me-3 text-center">
                  <Nav.Link className="nav-link p-1 mb-1 w-75px h-75px">
                    <img
                      src={product3}
                      alt=""
                      className="img-fluid mx-auto d-block rounded w-50px mb-1"
                    />
                  </Nav.Link>
                  <p className="mb-0">Natural</p>
                </div>
              </Nav>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const Specifications = () => {
  return (
    <React.Fragment>
      <h2 className="h4 mb-3">Specifications</h2>
      <Card>
        <Card.Body>
          <Row>
            <Col md={6}>
              <div className="table-responsive">
                <Table className="table-sm mb-0">
                  <tbody>
                    <tr>
                      <th scope="row" style={{ width: "320px" }}>
                        Category
                      </th>
                      <td>Smartphones</td>
                    </tr>
                    <tr>
                      <th scope="row">Brand</th>
                      <td>Apple</td>
                    </tr>
                    <tr>
                      <th scope="row">Product number</th>
                      <td>935277</td>
                    </tr>
                    <tr>
                      <th scope="row">Warranty</th>
                      <td>24 Months</td>
                    </tr>
                    <tr>
                      <th scope="row">Color</th>
                      <td>Blue</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col md={6}>
              <div className="table-responsive">
                <Table className="table-sm mb-0">
                  <tbody>
                    <tr>
                      <th scope="row" style={{ width: "320px" }}>
                        Year introduced
                      </th>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <th scope="row">Operating system</th>
                      <td>iOS</td>
                    </tr>
                    <tr>
                      <th scope="row">Operating system when introduced</th>
                      <td>iOS 17</td>
                    </tr>
                    <tr>
                      <th scope="row">Update frequency</th>
                      <td>Each quarter</td>
                    </tr>
                    <tr>
                      <th scope="row">Date of last security update</th>
                      <td>September 2028</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

interface RelatedProductsCardProps {
  image: string;
  altText: string;
  title: string;
  rating: string;
  reviews: string;
  price: string;
}

const RelatedProductsCard = ({
  image,
  altText,
  title,
  rating,
  reviews,
  price,
}: RelatedProductsCardProps) => (
  <Col sm={6} xl={4}>
    <Card className="mb-4">
      <Card.Body>
        <Row className="align-items-center">
          <Col md={4}>
            <img
              src={image}
              alt={altText}
              className="img-fluid mx-auto d-block mw-75px"
            />
          </Col>
          <Col md={8}>
            <div className="text-center text-md-start pt-3 pt-md-0">
              <h5 className="text-truncate">
                <span className="text-reset">{title}</span>
              </h5>
              <p className="text-muted mb-4">
                <FontAwesomeIcon icon={faStar} className="text-warning me-1" />{" "}
                {rating}
                <span className="text-muted ms-1">
                  out of {reviews} reviews
                </span>
              </p>
              <p className="my-0">
                <span className="text-muted me-2">
                  <strong>{price}</strong>
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Col>
);

const RelatedProducts = () => {
  return (
    <React.Fragment>
      <Row>
        <RelatedProductsCard
          image={product9}
          altText="Apple iPad Pro"
          title="Apple iPad Pro"
          rating="4.6"
          reviews="55"
          price="$1,399.00"
        />
        <RelatedProductsCard
          image={product11}
          altText="Apple Watch SE"
          title="Apple Watch SE"
          rating="4.7"
          reviews="40"
          price="$299.00"
        />
        <RelatedProductsCard
          image={product7}
          altText='Apple MacBook Pro 16"'
          title='Apple MacBook Pro 16"'
          rating="4.7"
          reviews="45"
          price="$2,399.00"
        />
      </Row>
    </React.Fragment>
  );
};

const ProductDetails = () => {
  return (
    <React.Fragment>
      <Helmet title="Product Details" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Product Details</h1>

        <Details />
        <Specifications />
        <RelatedProducts />
      </Container>
    </React.Fragment>
  );
};

export default ProductDetails;
