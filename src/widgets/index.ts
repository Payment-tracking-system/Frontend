import {PreloaderWidget} from "@/widgets/preloader/preloader.widget.tsx";
import {ErrorBoundaryWidget} from "@/widgets/error-boundary/error-boundary.widget.tsx";
import {HeaderWidget} from "@/widgets/header/header.widget.tsx";
import {BottomNavbarWidget} from "@/widgets/bottom-navbar/bottom-navbar.widget.tsx";
import {AlertWidget} from "@/widgets/alert/alert.widget.tsx";


export const Widget = {
  ErrorBoundaryWidget: ErrorBoundaryWidget,
  Preloader: PreloaderWidget,
  Navbar: HeaderWidget,
  BottomNavbar: BottomNavbarWidget,
  Alert: AlertWidget
}