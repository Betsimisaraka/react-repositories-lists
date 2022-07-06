describe("Repositories table", () => {
  const DEFAULT_QUERY = "react";
  const CUSTOM_QUERY = "antd";
  const EMPTY_QUERY = "antd";
  it("shows loading spinner", () => {
    cy.visit("http://localhost:3000");
    cy.get('div[role="progressbar"]').should("be.visible");
  });

  it(`loads results for default query ${DEFAULT_QUERY}`, () => {
    cy.visit("http://localhost:3000");
    cy.get('div[role="progressbar"]').should("be.visible");
    cy.get('tr[role="row"]').should("have.length", 6);
    cy.get('tr[role="row"]').each((item, index, list) => {
      if (index > 0) {
        expect(item.text().toLowerCase().includes(DEFAULT_QUERY)).to.be.true;
      }
    });
    cy.get('div[role="progressbar"]').should("not.exist");
  });
  it(`performs search for custom query ${CUSTOM_QUERY}`, () => {
    cy.visit("http://localhost:3000");
    cy.get('div[role="progressbar"]').should("be.visible");
    cy.get('tr[role="row"]').should("have.length", 6);
    cy.get('tr[role="row"]').each((item, index, list) => {
      if (index > 0) {
        expect(item.text().toLowerCase().includes(DEFAULT_QUERY)).to.be.true;
      }
    });
    cy.get('div[role="progressbar"]').should("not.exist");

    cy.get('input[placeholder*="Enter github name"]').clear();
    cy.get('input[placeholder*="Enter github name"]').type(CUSTOM_QUERY);
    cy.get('tr[role="row"]').should("have.length", 0);
    cy.get('div[role="progressbar"]').should("be.visible");
    cy.get('tr[role="row"]').should("have.length", 6);
    cy.get('tr[role="row"]').each((item, index, list) => {
      if (index > 0) {
        expect(item.text().toLowerCase().includes(CUSTOM_QUERY)).to.be.true;
      }
    });
  });
  it(`displays no results with only table header for query ${EMPTY_QUERY}`, () => {
    cy.visit("http://localhost:3000");
    cy.get('div[role="progressbar"]').should("be.visible");
    cy.get('tr[role="row"]').should("have.length", 6);
    cy.get('tr[role="row"]').each((item, index, list) => {
      if (index > 0) {
        expect(item.text().toLowerCase().includes(DEFAULT_QUERY)).to.be.true;
      }
    });
    cy.get('div[role="progressbar"]').should("not.exist");

    cy.get('input[placeholder*="Enter github name"]').clear();
    cy.get('div[role="progressbar"]').should("be.visible");
    cy.get('tr[role="row"]').should("have.length", 0);
    cy.get('div[role="progressbar"]').should("not.exist");
    cy.get('tr[role="row"]').should("have.length", 1);
  });
});