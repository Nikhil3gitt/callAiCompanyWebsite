import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface LogoProps {
  href?: string | null
  showWordmark?: boolean
  size?: number
  className?: string
  priority?: boolean
}

export function Logo({
  href = "/",
  showWordmark = true,
  size = 40,
  className,
  priority = false,
}: LogoProps) {
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.svg"
        alt="callAI logo"
        width={size}
        height={size}
        priority={priority}
        className="drop-shadow-lg"
      />
      {showWordmark && (
        <span className="text-xl font-bold font-heading tracking-wide">
          callAI
        </span>
      )}
    </div>
  )

  if (!href) {
    return content
  }

  return (
    <Link href={href} className="inline-flex items-center">
      {content}
    </Link>
  )
}
