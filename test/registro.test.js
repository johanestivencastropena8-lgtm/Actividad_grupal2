const test = require("node:test");
const assert = require("node:assert/strict");
const { registrarUsuario } = require("../registro");

test("registra usuario con datos válidos", () => {
  const resultado = registrarUsuario("Ana Pérez", "ana@example.com");
  assert.equal(resultado.mensaje, "Usuario registrado correctamente");
  assert.deepEqual(resultado.usuario, {
    nombre: "Ana Pérez",
    correo: "ana@example.com"
  });
});

test("rechaza nombre vacío", () => {
  const resultado = registrarUsuario("   ", "ana@example.com");
  assert.ok(resultado.error);
});

test("rechaza datos que no sean texto", () => {
  const resultado = registrarUsuario(123, null);
  assert.ok(resultado.error);
});
