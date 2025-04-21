// @ts-check
import { test, expect, request } from '@playwright/test';

// Contoh GET
test('Contoh Get', async ({ page }) => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users?page=2');            // methodnya kek get, put, post, delete
    expect(res.status()).toBe(200);                                                     // validasi respond API
    const respondJSON = await res.json();
    expect(respondJSON.page).toBe(2);
    expect(respondJSON.per_page).toBe(6);
});

// Contoh POST 
test('Contoh post', async ({ page }) => {
    const apiContext = await request.newContext();
    const postData = {
        "name": "morpheus",
        "job": "leader"
    };
    const res = await apiContext.post('https://reqres.in/api/users', {
        data: postData
    });
    expect(res.status()).toBe(201);                                               // validasi respond API
    const respondJSON = await res.json();
    expect(respondJSON.name).toBe('morpheus');
    expect(respondJSON.job).toBe('leader');

});

// Contoh PUT
test('Contoh put', async ({ page }) => {
    const apiContext = await request.newContext();
    // const headerRequest = {      (kalo ada headerRequest)
    //     "auth-token" : "",
    //     "channel-ID" : "",
    // };
    const putData = {
        "name": "morpheus",
        "job": "zion resident"
    };
    const res = await apiContext.put('https://reqres.in/api/users/2', {
        // header: headerRequest, (kalo ada headerRequest)
        data: putData
    });
    expect(res.status()).toBe(200);
    const respondJSON = await res.json();
    expect(respondJSON.name).toBe('morpheus');
    expect(respondJSON.job).toBe('zion resident');
});

test('Contoh Delete', async ({ page }) => {
    const apiContext = await request.newContext();
    const res = await apiContext.delete('https://reqres.in/api/users/2');            // methodnya kek get, put, post, delete
    expect(res.status()).toBe(204);                                                     // validasi respond API
});