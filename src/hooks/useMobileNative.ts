/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import { App as CapApp } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

interface UseMobileNativeOptions {
  onHardwareBack?: () => boolean; // Return true if back action was handled, false to allow default
  resolvedTheme?: "dark" | "light";
}

/**
 * Hook to manage native mobile integrations:
 * - Status Bar appearance
 * - Hardware Back Button navigation on Android
 * - Safe tactile haptic feedback
 */
export function useMobileNative({ onHardwareBack, resolvedTheme = "dark" }: UseMobileNativeOptions = {}) {
  // Configure Status Bar on Native Android / iOS
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    async function configureStatusBar() {
      try {
        if (resolvedTheme === "light") {
          await StatusBar.setStyle({ style: Style.Light });
          await StatusBar.setBackgroundColor({ color: "#f2f6f5" });
        } else {
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: "#111616" });
        }
      } catch (err) {
        console.warn("StatusBar setup warning:", err);
      }
    }

    configureStatusBar();
  }, [resolvedTheme]);

  // Handle Hardware Back Button on Android
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    const backListener = CapApp.addListener("backButton", ({ canGoBack }) => {
      if (onHardwareBack) {
        const wasHandled = onHardwareBack();
        if (wasHandled) return;
      }

      if (canGoBack) {
        window.history.back();
      } else {
        CapApp.exitApp();
      }
    });

    return () => {
      backListener.then((listener) => listener.remove()).catch(() => {});
    };
  }, [onHardwareBack]);
}

/**
 * Triggers standard sensory haptic feedback
 */
export async function triggerHapticFeedback(style: ImpactStyle = ImpactStyle.Medium) {
  try {
    if (Capacitor.isNativePlatform()) {
      await Haptics.impact({ style });
    } else if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  } catch {
    // Haptics unavailable on this platform/device
  }
}
