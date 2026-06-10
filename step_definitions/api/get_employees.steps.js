const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const axios = require('axios');

let baseUrl;

When('I save the returned employee ID', function () {
  this.savedId = this.createdEmployeeId || (this.apiResponse && this.apiResponse.data ? this.apiResponse.data.id : null);
  });

  When('I send a GET request to {string} with the saved ID', async function (endpoint) {
    const url = `${baseUrl}${endpoint.replace('{id}', this.savedId)}`;
      try {
          this.apiResponse = await axios.get(url);
            } catch (error) {
                this.apiResponse = error.response;
                  }
                  });

                  When('I send a GET request to {string} with id {int}', async function (endpoint, id) {
                    const url = `${baseUrl}${endpoint.replace('{id}', id)}`;
                      try {
                          this.apiResponse = await axios.get(url);
                            } catch (error) {
                                this.apiResponse = error.response;
                                  }
                                  });

                                  Then('the response body message should be {string}', function (expectedMessage) {
                                    const body = this.apiResponse.data;
                                      const message = body.message || body.error || JSON.stringify(body);
                                        expect(message).toContain(expectedMessage);
                                        });
