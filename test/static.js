const express = require(`express`);
const request = require(`supertest`);
const mockOffersRouter = require(`./mock-offers-router`);
const app = require(`express`)();

app.use(express.static(`static`));
app.use(`/api/offers`, mockOffersRouter);

describe(`Static resources response`, () => {
  it(`Should return index html file`, () => {
    return request(app)
        .get(`/`)
        .set(`Accept`, `text/html`)
        .expect(200)
        .expect(`Content-Type`, /html/);
  });

  it(`Should return styles`, () => {
    return request(app)
        .get(`/css/style.css`)
        .set(`Accept`, `text/css`)
        .expect(200)
        .expect(`Content-Type`, /css/);
  });

  it(`Should return picture`, () => {
    return request(app)
        .get(`/img/logo.png`)
        .set(`Accept`, `image/png`)
        .expect(200)
        .expect(`Content-Type`, /png/);
  });

  it(`Should return favicon`, () => {
    return request(app)
        .get(`/favicon.ico`)
        .set(`Accept`, `image/x-icon`)
        .expect(200)
        .expect(`Content-Type`, /ico/);
  });
});
