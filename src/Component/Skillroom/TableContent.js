import React, { useState } from "react";
import "./TableContent.css";
import EditableForm from "./EditableForm";
import { Table,TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components";

const TableContent = () => {
 const itemsdata = [
    {
      classname: "Introduction to React",
      organizationName: "Tech Academy",
      startDate: "2024-01-10",
      endDate: "2024-01-24",
      duration: "2 weeks",
      programCategory: "Web Development",
      price: 199.99,
      description: "Learn the fundamentals of React, a popular JavaScript library for building user interfaces.",
      ageRange: "16+",
      totalSeats: 30,
      remainingSeats: 10,
      venueId: "VEN123",
      facilityId: "FAC456",
      heroImageURL: "https://example.com/react-class.jpg",
      paymentLink: "https://example.com/payment/react",
      instructorID: "INST001",
      tags: "React, Web Development, JavaScript",
    },
    {
      classname: "Advanced JavaScript",
      organizationName: "Code School",
      startDate: "2024-02-01",
      endDate: "2024-02-15",
      duration: "2 weeks",
      programCategory: "Web Development",
      price: 249.99,
      description: "Dive deep into advanced JavaScript concepts including closures, promises, and async/await.",
      ageRange: "18+",
      totalSeats: 25,
      remainingSeats: 5,
      venueId: "VEN124",
      facilityId: "FAC457",
      heroImageURL: "https://example.com/advanced-js.jpg",
      paymentLink: "https://example.com/payment/advanced-js",
      instructorID: "INST002",
      tags: "JavaScript, Advanced",
    },
    {
      classname: "Data Science Basics",
      organizationName: "Data Institute",
      startDate: "2024-03-01",
      endDate: "2024-03-15",
      duration: "2 weeks",
      programCategory: "Data Science",
      price: 299.99,
      description: "An introduction to data science concepts using Python and R.",
      ageRange: "18+",
      totalSeats: 20,
      remainingSeats: 0,
      venueId: "VEN125",
      facilityId: "FAC458",
      heroImageURL: "https://example.com/data-science.jpg",
      paymentLink: "https://example.com/payment/data-science",
      instructorID: "INST003",
      tags: "Data Science, Python, R",
    },
    {
      classname: "Graphic Design Fundamentals",
      organizationName: "Creative Arts Academy",
      startDate: "2024-04-05",
      endDate: "2024-04-19",
      duration: "2 weeks",
      programCategory: "Design",
      price: 179.99,
      description: "Learn the principles of graphic design using Adobe Creative Suite.",
      ageRange: "14+",
      totalSeats: 15,
      remainingSeats: 3,
      venueId: "VEN126",
      facilityId: "FAC459",
      heroImageURL: "https://example.com/graphic-design.jpg",
      paymentLink: "https://example.com/payment/graphic-design",
      instructorID: "INST004",
      tags: "Graphic Design, Adobe",
    },
    {
      classname: "Machine Learning 101",
      organizationName: "AI Academy",
      startDate: "2024-05-12",
      endDate: "2024-05-26",
      duration: "2 weeks",
      programCategory: "Data Science",
      price: 349.99,
      description: "Introduction to machine learning concepts and applications using Python.",
      ageRange: "18+",
      totalSeats: 10,
      remainingSeats: 2,
      venueId: "VEN127",
      facilityId: "FAC460",
      heroImageURL: "https://example.com/machine-learning.jpg",
      paymentLink: "https://example.com/payment/machine-learning",
      instructorID: "INST005",
      tags: "Machine Learning, AI, Python",
    },
    {
      classname: "HTML & CSS Essentials",
      organizationName: "Web Dev Bootcamp",
      startDate: "2024-06-20",
      endDate: "2024-07-04",
      duration: "2 weeks",
      programCategory: "Web Development",
      price: 149.99,
      description: "Master the basics of web development with HTML and CSS.",
      ageRange: "15+",
      totalSeats: 35,
      remainingSeats: 20,
      venueId: "VEN128",
      facilityId: "FAC461",
      heroImageURL: "https://example.com/html-css.jpg",
      paymentLink: "https://example.com/payment/html-css",
      instructorID: "INST006",
      tags: "HTML, CSS, Web Development",
    },
  ]

  const [items, setItems] = useState(itemsdata);
  const [editingItem, setEditingItem] = useState(null);

  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  const handleSave = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.classname === updatedItem.classname ? updatedItem : item))
    );
    setEditingItem(null);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  const columns = [
    { columnKey: "name", label: "Name" },
    { columnKey: "instructor", label: "Instructor" },
    { columnKey: "startDate", label: "Start Date" },
    { columnKey: "programCategory", label: "Category" },
    { columnKey: "totalSeats", label: "Total Seats" },
    { columnKey: "remainingSeats", label: "Remaining Seats" },
  ];

  return (
    <div className="table-container">
      {editingItem ? (
        <EditableForm initialData={editingItem} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <Table className="table">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.columnKey} className="header-cell">
                  {column.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index} className="row" onClick={() => handleEditClick(item)}>
                <TableCell className="cell">{item.classname}</TableCell>
                <TableCell className="cell">{item.organizationName}</TableCell>
                <TableCell className="cell">{item.startDate}</TableCell>
                <TableCell className="cell">{item.programCategory}</TableCell>
                <TableCell className="cell">{item.totalSeats}</TableCell>
                <TableCell className="cell">{item.remainingSeats}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default TableContent;
