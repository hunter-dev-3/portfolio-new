export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/80 backdrop-blur-md py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-primary">
              Omar<span className="text-destructive">Nasim</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {currentYear} Omar Nasim. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
