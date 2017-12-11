import * as Electron from 'electron';
import {ElectronWindow} from './index';

declare let window: ElectronWindow;

export interface ElectronWindow extends Window {
    require(module: string): Electron.RendererInterface;
}

export class NeoElectronService {
    private _electron: Electron.RendererInterface;

    private get electron(): Electron.RendererInterface {
        if (!this._electron) {
            if (window && window.require) {
                this._electron = window.require('electron');
                return this._electron;
            }
            return null;
        }
        return this._electron;
    }

    public get isElectronApp(): boolean {
        return !!window.navigator.userAgent.match(/Electron/);
    }

    public get desktopCapturer(): Electron.DesktopCapturer {
        return this.electron ? this.electron.desktopCapturer : null;
    }

    public get ipcRenderer(): Electron.IpcRenderer {
        return this.electron ? this.electron.ipcRenderer : null;
    }

    public get remote(): Electron.Remote {
        return this.electron ? this.electron.remote : null;
    }

    public get webFrame(): Electron.WebFrame {
        return this.electron ? this.electron.webFrame : null;
    }

    public get clipboard(): Electron.Clipboard {
        return this.electron ? this.electron.clipboard : null;
    }

    public get crashReporter(): Electron.CrashReporter {
        return this.electron ? this.electron.crashReporter : null;
    }

    public get process(): NodeJS.Process {
        return this.remote ? this.remote.process : null;
    }

    public get nativeImage(): typeof Electron.nativeImage {
        return this.electron ? this.electron.nativeImage : null;
    }

    public get screen(): Electron.Screen {
        return this.electron ? this.electron.screen : null;
    }

    public get shell(): Electron.Shell {
        return this.electron ? this.electron.shell : null;
    }
}
