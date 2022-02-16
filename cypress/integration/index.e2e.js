describe("BB E2E", () => {
  it("Visits the BB", () => {
    cy.visit("/");
    cy.get("a")
      .contains(/Каталог/)
      .click();
    cy.location("pathname").should("eq", "/characters");
  });

  it("Should work live search", () => {
    cy.get('input[type="text"]').type("SAC").should("have.value", "SAC");
    cy.get("li a span").should("have.text", "SAC Ramey");

    cy.contains(/SAC Ramey/).click();
    cy.location("pathname").should("eq", "/character/43");
  });

  it("Should work link 'Back to catalog'", () => {
    cy.contains(/Назад в Каталог/).click();
    cy.location("pathname").should("eq", "/characters");
  });

  it("Search by submit event should work", () => {
    cy.get('input[type="text"]').type("Walter").should("have.value", "Walter");
    cy.get("form").submit();

    cy.get("div > p > strong:last-of-type").should("have.text", "2");

    cy.contains(/Назад в Каталог/).click();
    cy.location("pathname").should("eq", "/characters");

    cy.get('input[type="text"]').type("123").should("have.value", "123");
    cy.get("form").submit();

    cy.get("div > p").contains(/не найдено/);

    cy.contains(/Назад в Каталог/).click();
    cy.location("pathname").should("eq", "/characters");
  });

  it("The number of cards must change", () => {
    cy.get("div > a").should("have.length", 10);
    cy.get("div > div > button").contains(15).click();
    cy.get("div > a").should("have.length", 15);
    cy.get("div > div > button").contains(25).click();
    cy.get("div > a").should("have.length", 25);
    cy.get("div > div > button").contains(10).click();
    cy.get("div > a").should("have.length", 10);
  });
  it("The order of the cards must change", () => {
    cy.get("[data-show=list]").click();
    cy.get("div > p").contains("Статус");
    cy.get("[data-show=grid]").click();
  });

  it("Paginator should change dynamically", () => {
    cy.get("[data-test=pagination] > div > button").contains(3).click();
    cy.get("[data-test=pagination] > div > button:nth-of-type(4)").should(
      "have.text",
      "4"
    );
    cy.get("[data-test=pagination] > button:last-of-type").click();
    cy.get("[data-test=pagination] > div > button:nth-of-type(5)").should(
      "have.text",
      "5"
    );
  });
  it("The logo should lead to the main page", () => {
    cy.get("header nav a:first-of-type").click();
    cy.location("pathname").should("eq", "/");
  });
});
