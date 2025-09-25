#!/bin/bash

# Script de pre-commit para verificar la calidad del código
echo "🔍 Ejecutando verificaciones de código..."

# Verificar tipos de TypeScript
echo "📝 Verificando tipos de TypeScript..."
npm run type-check
if [ $? -ne 0 ]; then
  echo "❌ Error: Fallos en la verificación de tipos"
  exit 1
fi

# Ejecutar ESLint
echo "🧹 Ejecutando ESLint..."
npm run lint:check
if [ $? -ne 0 ]; then
  echo "❌ Error: Fallos en ESLint. Ejecuta 'npm run lint:fix' para corregir automáticamente"
  exit 1
fi

echo "✅ Todas las verificaciones pasaron correctamente!"
echo "🚀 El código está listo para commit"
