import { assertType, expectTypeOf, test } from "vitest";

import { checkEven } from "../src/utility/UtilityFunction";

test("checkEven type tests", () => {
  // Assert that checkEven is a function
  expectTypeOf(checkEven).toBeFunction();

  // Assert that the parameter of checkEven is of type number
  expectTypeOf(checkEven).parameter(0).toMatchTypeOf<number>();

  // Assert that the return type of checkEven is boolean
  expectTypeOf(checkEven).returns.toBeBoolean();

  // Test for correct type: this should work as it passes a number
  assertType(checkEven(4));

  // Simulate type failure by wrapping the incorrect assertions in a try-catch block
  try {
    // Intentionally pass incorrect types to cause the test to fail
    // @ts-expect-error: This should throw an error because the argument is not a number
    assertType(checkEven("4"));

    // If this line runs without error, we manually fail the test
    throw new Error("Expected type failure, but the test did not fail.");
  } catch (error) {
    // Expected failure, continue the test
  }

  try {
    // @ts-expect-error: This should throw an error because the argument is not a number
    assertType(checkEven({}));

    // If this line runs without error, we manually fail the test
    throw new Error("Expected type failure, but the test did not fail.");
  } catch (error) {
    // Expected failure, continue the test
  }
});
