import zlib, struct

def make_png(width, height, color):
    # Minimal PNG generation
    def chunk(type, data):
        return struct.pack('>I', len(data)) + type + data + struct.pack('>I', zlib.crc32(type + data) & 0xffffffff)

    r, g, b = int(color[1:3], 16), int(color[3:5], 16), int(color[5:7], 16)
    pixel = struct.pack('BBB', r, g, b)
    data = b''.join(b'\x00' + pixel * width for _ in range(height))
    
    png = b'\x89PNG\r\n\x1a\n'
    png += chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0))
    png += chunk(b'IDAT', zlib.compress(data))
    png += chunk(b'IEND', b'')
    return png

with open('/home/team/shared/east-africa-travel-hub/icons/icon-192x192.png', 'wb') as f:
    f.write(make_png(192, 192, '#2D5016'))

with open('/home/team/shared/east-africa-travel-hub/icons/icon-512x512.png', 'wb') as f:
    f.write(make_png(512, 512, '#2D5016'))
