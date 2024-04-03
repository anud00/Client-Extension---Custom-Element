import { test, expect } from "@playwright/test";

const baseUrl = "http://localhost:5173/";

test.describe("Task Manager", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  test("should display header text as 'Task Manager'", async ({ page }) => {
    const headerText = await page.textContent(".header-container h1");
    expect(headerText).toBe("Task Manager");
  });

  test("should add a task", async ({ page }) => {
    await page.fill(".task-input", "Test Task");
    await page.click(".add-task-btn");
    await page.waitForSelector(".task span");
    const taskText = await page.textContent(".task span");
    expect(taskText).toBe("Test Task");
  });

  test("should delete a task", async ({ page }) => {
    await page.fill(".task-input", "Test Task");
    await page.click(".add-task-btn");
    await page.click(".delete-btn");
    await page.waitForSelector(".task", { state: "hidden" });
    const taskExists = await page.$(".task");
    expect(taskExists).toBeNull();
  });
});
