$port = 8080
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Server running on $prefix"

$root = Get-Location

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        $filePath = Join-Path $root $path.TrimStart('/')
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            
            if ($filePath.EndsWith(".html")) { $response.ContentType = "text/html; charset=utf-8" }
            elseif ($filePath.EndsWith(".js") -or $filePath.EndsWith(".ts") -or $filePath.EndsWith(".tsx")) { $response.ContentType = "application/javascript" }
            elseif ($filePath.EndsWith(".css")) { $response.ContentType = "text/css" }
            elseif ($filePath.EndsWith(".json")) { $response.ContentType = "application/json" }
            elseif ($filePath.EndsWith(".glb")) { $response.ContentType = "model/gltf-binary" }
            elseif ($filePath.EndsWith(".gltf")) { $response.ContentType = "model/gltf+json" }
            elseif ($filePath.EndsWith(".mp3")) { $response.ContentType = "audio/mpeg" }
            elseif ($filePath.EndsWith(".otf")) { $response.ContentType = "font/otf" }
            elseif ($filePath.EndsWith(".ttf")) { $response.ContentType = "font/ttf" }
            elseif ($filePath.EndsWith(".woff")) { $response.ContentType = "font/woff" }
            elseif ($filePath.EndsWith(".woff2")) { $response.ContentType = "font/woff2" }
            elseif ($filePath.EndsWith(".svg")) { $response.ContentType = "image/svg+xml" }
            elseif ($filePath.EndsWith(".png")) { $response.ContentType = "image/png" }
            elseif ($filePath.EndsWith(".jpg") -or $filePath.EndsWith(".jpeg")) { $response.ContentType = "image/jpeg" }
            
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    } catch {
        # continue loop
    }
}
