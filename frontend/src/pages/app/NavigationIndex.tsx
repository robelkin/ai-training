import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

// Import the default export which contains all sections
import sidebarItems from '../../components/sidebar/dashboardItems';
import { SidebarItemsType } from '../../types/sidebar'; // Assuming SidebarItemsType defines the structure

// Helper function to render a list of items (handles nesting)
const renderNavItems = (items: SidebarItemsType[]) => {
  return items.map((item) => (
    <React.Fragment key={item.href || item.title}> {/* Use href or title for key */}
      {/* Direct link item */}
      {item.href && !item.children && (
        <ListGroup.Item action as={Link} to={item.href}>
          {item.icon && <item.icon className="align-middle me-2" size={18} />} {item.title}
        </ListGroup.Item>
      )}
      {/* Item with children (nested list) */}
      {item.children && (
        <React.Fragment>
          <ListGroup.Item className="fw-bold"> {/* Sub-Section Header */}
            {item.icon && <item.icon className="align-middle me-2" size={18} />} {item.title}
          </ListGroup.Item>
          {/* Recursive call for children, rendered indented or within the same ListGroup */}
          <div style={{ paddingLeft: '1.5rem' }}> {/* Optional indentation */}
            {renderNavItems(item.children)}
          </div>
        </React.Fragment>
      )}
      {/* Item without href (could be a header or spacer, render differently if needed) */}
      {!item.href && !item.children && (
         <ListGroup.Item>{item.title}</ListGroup.Item> // Render as plain text
      )}
    </React.Fragment>
  ));
};

const NavigationIndex = () => {
  return (
    <React.Fragment>
      <Helmet title="Site Navigation" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Site Navigation</h1>

        <Row>
          {/* Iterate over the sections defined in sidebarItems (e.g., Navigation, Apps, Pages) */}
          {sidebarItems.map((section) => (
            <Col md={6} xl={4} key={section.title}>
              <Card className='mb-3'>
                <Card.Header>
                  <Card.Title className="mb-0">{section.title}</Card.Title>
                </Card.Header>
                <ListGroup variant="flush">
                  {/* Pass the 'pages' array of the current section to the render function */}
                  {renderNavItems(section.pages)}
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NavigationIndex; 