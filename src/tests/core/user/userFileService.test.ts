/** The actual implementation of the client dependency is not seen in this example since we are replacing it with
 a double in the beforeEach
 The real one would be a wrapper of fetch, to make requests, while the redirector dependency we see in the first test would be a wrapper of window.location, to change the page.
 We create wrappers of these third party library calls since it is important to avoid making code doubles that I can't change.
 In this case, as what we want to test is that the file is stored through the createArchive method of client, the navigate method of redirector
 we can simulate it with an empty function. */

// describe.skip('The archive creation', () => {
//     let client: Client;
//     beforeEach(() => {
//         client = new Client();
//         client.createArchive = () => {
//             const response = {status: '200'};
//             return Promise.resolve(response);
//         };
//     });
//
//     it('is stored in the server side', () => {
//         const redirector = new Redirector();
//         redirector.navigateTo = () => {
//         };
//         renderComponent(client, redirector);
//         populateForm();
//
//         simulateFormSubmission();
//
//         expect(client.createArchive).toHaveBeenCalled();
//     });
//
//     it('redirects to the dashboard after storing', (done) => {
//         const redirector = new Redirector();
//         redirector.navigateTo = (route) => {
//             expect(route).toEqual(route.dashboard);
//             done();
//         };
//         renderComponent(client, redirector);
//         populateForm();
//
//         simulateFormSubmission();
//     });
//
//     function simulateFormSubmission() {
//         /* ... */
//     }
//
//     function populateForm() {
//         /*...*/
//     }
//
//     function renderComponent(client: Client, redirector: Redirector) {
//         /*...*/
//     }
// });