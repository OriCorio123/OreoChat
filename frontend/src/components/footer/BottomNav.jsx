import { NavLink } from "react-router-dom";
import { Home, Search, Film, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const BottomNav = ({ userAvatarUrl = "https://github.com/shadcn.png" }) => {
  const navItems = [
    { to: "/", icon: Home, label: "Home", fillable: true },
    { to: "/search", icon: Search, label: "Explore", fillable: false },
    { to: "/reels", icon: Film, label: "Reels", fillable: true },
    { to: "/notifications", icon: Heart, label: "Activity", fillable: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-14 w-full items-center justify-around border-t bg-background/95 px-2 backdrop-blur">
      {navItems.map(({ to, icon: Icon, label, fillable }) => (
        <NavLink key={to} to={to} className="outline-none">
          {({ isActive }) => (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-10 w-10 transition-transform active:scale-90 hover:bg-transparent",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={label}
            >
              <Icon
                className="h-6 w-6"
                strokeWidth={isActive ? 2.5 : 1.75}
                fill={isActive && fillable ? "currentColor" : "none"}
              />
            </Button>
          )}
        </NavLink>
      ))}

      {/* Profile Avatar Tab */}
      <NavLink to="/profile" className="outline-none">
        {({ isActive }) => (
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-10 w-10 rounded-full transition-transform active:scale-90 hover:bg-transparent",
              isActive && "ring-2 ring-foreground ring-offset-2 ring-offset-background"
            )}
            aria-label="Profile"
          >
            <Avatar className="h-7 w-7">
              <AvatarImage src={userAvatarUrl} alt="User" />
              <AvatarFallback className="text-xs">U</AvatarFallback>
            </Avatar>
          </Button>
        )}
      </NavLink>
    </nav>
  );
};

export default BottomNav;