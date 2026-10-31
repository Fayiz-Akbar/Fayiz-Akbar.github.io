import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  title?: string;
  href?: string;
  width?: number;
  height?: number;
  className?: string;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 md:grid-cols-4 border-x border-slate-200",
        className
      )}
      {...props}
    >
      {/* Top guideline spanning screen */}
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-slate-200" />

      {/* Card 1: FXT Dental (Col 1, Row 1 on mobile) */}
      <LogoCard
        className="relative border-r border-b md:border-b-0 border-slate-200 bg-secondary"
        href="https://fxtdentalclinic.com/"
        logo={{
          src: "/image/logo-fxt.png",
          alt: "FXT Dental Clinic",
          title: "FXT Dental",
          className: "h-6 sm:h-8 md:h-10",
        }}
      >
        <PlusIcon
          className="-left-[12px] -top-[12px] absolute z-10 size-6 text-slate-400 pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-right-[12px] -top-[12px] absolute z-10 size-6 text-slate-400 pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-left-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 md:hidden pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 pointer-events-none"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Card 2: PT Cipta Bahari Sejuk (CBS) (Col 2, Row 1 on mobile) */}
      <LogoCard
        className="relative border-b md:border-b-0 md:border-r border-slate-200 bg-background"
        href="https://ciptabaharisejukofficial.com/"
        logo={{
          src: "/image/logo-cbs.png",
          alt: "PT Cipta Bahari Sejuk",
          title: "PT Cipta Bahari Sejuk",
          className: "h-6 sm:h-8 md:h-10",
        }}
      >
        <PlusIcon
          className="-right-[12px] -top-[12px] absolute z-10 size-6 text-slate-400 md:hidden pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 md:hidden pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-right-[12px] -top-[12px] absolute z-10 size-6 text-slate-400 hidden md:block pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 hidden md:block pointer-events-none"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Card 3: Telkomsel (Col 1, Row 2 on mobile) */}
      <LogoCard
        className="relative border-r border-slate-200 bg-secondary"
        href="https://www.telkomsel.com/"
        logo={{
          src: "/image/logo-telkomsel.png",
          alt: "Telkomsel",
          title: "Telkomsel",
          className: "h-5 sm:h-7 md:h-9",
        }}
      >
        <PlusIcon
          className="-left-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-right-[12px] -top-[12px] absolute z-10 size-6 text-slate-400 hidden md:block pointer-events-none"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Card 4: Universitas Lampung (Col 2, Row 2 on mobile) */}
      <LogoCard
        className="relative bg-background"
        href="https://www.unila.ac.id/"
        logo={{
          src: "/image/logo-unila.png",
          alt: "Universitas Lampung",
          title: "Universitas Lampung",
          className: "h-6 sm:h-8 md:h-10",
        }}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-slate-400 pointer-events-none"
          strokeWidth={1}
        />
        <PlusIcon
          className="-right-[12px] -top-[12px] absolute z-10 size-6 text-slate-400 hidden md:block pointer-events-none"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Bottom guideline spanning screen */}
      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-slate-200" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
  href?: string;
};

export function LogoCard({ logo, href, className, children, ...props }: LogoCardProps) {
  const content = (
    <div
      className={cn(
        "flex items-center justify-center gap-2 sm:gap-3 bg-background px-2 py-3 sm:px-4 sm:py-6 md:p-8 transition-colors hover:bg-slate-100/60 cursor-pointer min-h-[64px] sm:min-h-[80px] md:min-h-[96px]",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className={cn(
          "pointer-events-none select-none object-contain transition-transform duration-250 group-hover:scale-105 shrink-0",
          logo.className || "h-6 sm:h-8 md:h-10"
        )}
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {logo.title && (
        <span className="font-bold text-[11px] sm:text-sm md:text-base text-[#183758] font-poppins tracking-tight select-none leading-tight truncate">
          {logo.title}
        </span>
      )}
      {children}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block text-inherit no-underline"
        title={`Kunjungi ${logo.title || logo.alt}`}
      >
        {content}
      </a>
    );
  }
  return content;
}
