# InfoChain Local Mobile Server
$port = 8080
$ip = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254*"} | Select-Object -First 1).IPAddress
if (-not $ip) { $ip = "10.8.10.185" }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://*:$port/")
try {
    $listener.Start()
} catch {
    # If wildcard binding requires admin, bind to localhost and standard IP
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Prefixes.Add("http://127.0.0.1:$port/")
    $listener.Start()
}

Clear-Host
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "   INFOCHAIN - SERVER AKSES PONSEL (MOBILE SERVER)     " -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Pastikan Ponsel (HP) & Laptop terhubung ke Wi-Fi yang sama." -ForegroundColor Green
Write-Host "2. Buka browser di HP (Chrome / Safari), lalu ketik URL berikut:" -ForegroundColor Green
Write-Host ""
Write-Host "   👉  http://${ip}:$port  👈" -ForegroundColor Yellow -BackgroundColor Black
Write-Host ""
Write-Host "   (Atau di laptop: http://localhost:$port)" -ForegroundColor Gray
Write-Host ""
Write-Host "Tekan Ctrl + C di jendela ini untuk menghentikan server." -ForegroundColor DarkGray
Write-Host "========================================================" -ForegroundColor Cyan

$baseFolder = $PSScriptRoot

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($urlPath) -or $urlPath -eq "/") {
            $urlPath = "index.html"
        }

        $filePath = Join-Path $baseFolder $urlPath
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            switch ($ext) {
                ".html" { $response.ContentType = "text/html; charset=utf-8" }
                ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                ".jsx"  { $response.ContentType = "text/plain; charset=utf-8" }
                ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                ".json" { $response.ContentType = "application/json; charset=utf-8" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".svg"  { $response.ContentType = "image/svg+xml" }
                default { $response.ContentType = "application/octet-stream" }
            }

            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.StatusCode = 404
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
        }
        $response.Close()
    } catch {
        # Handle exceptions gracefully during shutdown
    }