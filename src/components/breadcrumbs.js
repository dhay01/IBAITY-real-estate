import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
    return (
        <Breadcrumb className="Breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">for sale</Breadcrumb.Item>
              <Breadcrumb.Item href="#">residential</Breadcrumb.Item>
            <Breadcrumb.Item className="active" active>HOUSE</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbExample;