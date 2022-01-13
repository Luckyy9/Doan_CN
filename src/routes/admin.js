const express= require('express')
const router= express.Router();

const adminController= require('../app/controler/AdminController')

router.get('/:id/edit',adminController.edit);
router.put('/edit/:id', adminController.update);
router.delete('/delete/:id', adminController.delete);
router.post('/store',adminController.store);
router.get('/create',adminController.create);
router.patch('/restore/:id', adminController.restore);
router.get('/trash', adminController.trash);
router.get('/',adminController.admin);

module.exports=router;