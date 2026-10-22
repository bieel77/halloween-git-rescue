# 🎃 The Halloween Commit: Horror at the Server Room

> Cas d'estudi de *Forensic Software* amb Git: reconstrucció d'un repositori infectat, aïllament de línies temporals en branques, resolució manual d'un conflicte de fusió, purificació de l'historial i publicació remota a GitHub.

---

## 1. Presentació i Entorn

### 1.1 Presentació del cas d'estudi

La nit de la vespra de Tots Sants (31 d'octubre), a les 23:45 h, la terminal de la sala de servidors s'il·lumina en vermell: un antic desenvolupament maleït, `fantasmes_in_production.js`, ha estat despertat a l'historial del projecte. Un programador desaparegut l'any passat ha començat a injectar codi maliciós des d'una dimensió temporal paral·lela.

Aquest repositori documenta la intervenció realitzada en el rol d'enginyer/a de *Forensic Software*. Els objectius de la missió han estat:

1. **Reconstruir** el repositori local des de zero i establir una línia base estable.
2. **Aïllar** dues visions del futur del codi en branques independents (`feature-nightmare` i `feature-sanctuary`).
3. **Enfrontar** la col·lisió de codi provocada per la fusió de les dues branques i resoldre-la manualment.
4. **Viatjar en el temps** per eliminar de l'historial el commit infectat i restaurar l'últim estat segur.
5. **Publicar** el repositori purificat a GitHub per a l'auditoria final.

Tots els commits segueixen la convenció *Conventional Commits* (`feat`, `merge`, `docs`), amb missatges formals i descriptius que garanteixen la traçabilitat de cada canvi.

### 1.2 Entorn de treball

| Element | Valor |
|---|---|
| Sistema operatiu | Windows 11 (64 bits) |
| Terminal | Git Bash (inclosa a Git for Windows) |
| Versió de Git | git version 2.55.0.windows.5 |
| Editor de text | VS Code |
| Plataforma remota | GitHub |
| Autor/a | Biel Pérez Alonso |

---

## 2. Taula de Continguts

- [Bloc 1: Invocació del Repositori i Línia Base](bloc1.md)
- [Bloc 2: Les Branques del Més Enllà i Resolució del Conflicte](bloc2.md)
- [Bloc 3: Viatge Temporal, Exorcisme del Codi i Publicació Remota](bloc3.md)

---

## 3. Estructura del repositori

```text
halloween-git-rescue/
├── main.js        # Fitxer principal de l'aplicació (sistema de control de la sala)
├── README.md      # Document principal (aquest fitxer)
├── bloc1.md       # Documentació del Bloc 1
├── bloc2.md       # Documentació del Bloc 2
├── bloc3.md       # Documentació del Bloc 3
└── capturas/      # Captures de pantalla de la terminal (evidències)
```
