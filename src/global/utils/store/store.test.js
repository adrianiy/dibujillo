import actions from './actions';
import store from './store';

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

        test('logout test', () => {
            store.dispatch(actions.user.logout());
            expect(store.getState().user.user).toBe(undefined);
            expect(store.getState().user.loggedIn).toBeFalsy();
        });
    });

    describe('toaster store test suite', () => {
        test('set ok toaster test', () => {
            store.dispatch(actions.toaster.setOkToaster({ text: 'test' }));
            expect(store.getState().toaster.display).toBeTruthy();
            expect(store.getState().toaster.ok).toBeTruthy();
            expect(store.getState().toaster.text).toEqual('test');
        });

        test('set ko toaster test', () => {
            store.dispatch(actions.toaster.setKoToaster({ text: 'test' }));
            expect(store.getState().toaster.display).toBeTruthy();
            expect(store.getState().toaster.ok).toBeFalsy();
            expect(store.getState().toaster.text).toEqual('test');
        });

        test('hide toaster test', () => {
            store.dispatch(actions.toaster.setOkToaster({ text: 'test' }));
            expect(store.getState().toaster.display).toBeTruthy();
            store.dispatch(actions.toaster.hideToaster());
            expect(store.getState().toaster.display).toBeFalsy();
        });
    });
});
