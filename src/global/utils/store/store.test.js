import actions from "./actions"
import { store } from "./store"

describe('store test suite', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('user store test suite', () => {
        test('setUser test', () => {
            store.dispatch(actions.user.setUser({ test: 'test' }));
            expect(store.getState().user.test).toBe('test');
            expect(store.getState().user.loggedIn).toBeTruthy();
        });

        test("logout test", () => {
            store.dispatch(actions.user.logout());
            expect(store.getState().user.user).toBe(undefined);
            expect(store.getState().user.loggedIn).toBeFalsy();
        });
    })
})
