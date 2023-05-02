
export default function Footer() {
  return <div className="flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}">
    © MarBars {new Date().getFullYear()}
    </div>
}