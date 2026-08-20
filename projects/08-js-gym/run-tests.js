/**
 * JS Gym — friendly test runner
 * Run all:     npm test
 * One exercise: npm test -- 3
 * Or:          node run-tests.js 3
 */

const path = require("path");

const exercises = [
  { id: 1, file: "01-greet", title: "Greet" },
  { id: 2, file: "02-add", title: "Add" },
  { id: 3, file: "03-is-even", title: "Is even?" },
  { id: 4, file: "04-first-item", title: "First item" },
  { id: 5, file: "05-sum", title: "Sum" },
  { id: 6, file: "06-biggest", title: "Biggest" },
  { id: 7, file: "07-pokemon-name", title: "Pokémon name" },
  { id: 8, file: "08-clicker-bonus", title: "Clicker bonus" },
];

function runOne(ex) {
  const testPath = path.join(__dirname, "tests", `${ex.file}.test.js`);
  let results;
  try {
    results = require(testPath);
  } catch (err) {
    return {
      title: ex.title,
      file: ex.file,
      passed: false,
      lines: [`Could not load test: ${err.message}`],
    };
  }

  const lines = [];
  let passed = 0;
  let failed = 0;

  for (const r of results) {
    if (r.ok) {
      passed += 1;
      lines.push(`  ✅ ${r.name}`);
    } else {
      failed += 1;
      lines.push(`  ❌ ${r.name}`);
      lines.push(`     expected: ${format(r.expected)}`);
      lines.push(`     got:      ${format(r.actual)}`);
    }
  }

  return {
    title: ex.title,
    file: ex.file,
    passed: failed === 0,
    passedCount: passed,
    failedCount: failed,
    lines,
  };
}

function format(value) {
  if (typeof value === "string") return `"${value}"`;
  if (value === undefined) return "undefined";
  if (Number.isNaN(value)) return "NaN";
  return String(value);
}

function main() {
  const arg = process.argv[2];
  const selected = arg
    ? exercises.filter((ex) => String(ex.id) === String(arg) || ex.file.startsWith(String(arg).padStart(2, "0")))
    : exercises;

  if (selected.length === 0) {
    console.log("No exercise matched. Try: node run-tests.js 1");
    process.exit(1);
  }

  console.log("");
  console.log("🏋️  JS Gym");
  console.log("────────────────────────────");

  let allOk = true;
  let totalPass = 0;
  let totalFail = 0;

  for (const ex of selected) {
    // Clear require cache so re-runs pick up edits
    const exercisePath = path.join(__dirname, "exercises", `${ex.file}.js`);
    const testPath = path.join(__dirname, "tests", `${ex.file}.test.js`);
    delete require.cache[require.resolve(exercisePath)];
    delete require.cache[require.resolve(testPath)];

    const result = runOne(ex);
    console.log("");
    console.log(`${result.passed ? "✅" : "❌"} ${ex.id}. ${result.title} (${ex.file}.js)`);
    for (const line of result.lines) console.log(line);

    if (!result.passed) allOk = false;
    totalPass += result.passedCount || 0;
    totalFail += result.failedCount || 0;
  }

  console.log("");
  console.log("────────────────────────────");
  console.log(`Checks: ${totalPass} passed, ${totalFail} failed`);
  if (allOk) {
    console.log("Nice work — all selected exercises passed!");
  } else {
    console.log("Keep going — fix the ❌ ones and run again.");
  }
  console.log("");

  process.exit(allOk ? 0 : 1);
}

main();
