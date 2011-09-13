import logging

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import abort, redirect

from swat.lib.base import BaseController, render,json,jsonpickle
from swat.model.ShareModel import ShareModel;

log = logging.getLogger(__name__)

class ShareController(BaseController):

	def __init__(self):
		BaseController.__init__(self)
		if self._check_session():
			self.model = ShareModel(session['username'],session['password']);
			self.ChildNodes = [];

	def index(self):
		if not self._check_session():
			return json.dumps(self.AuthErr);
			
		Shares = self.model.GetShareList();
		for Share in Shares:
			#response.write(Share.Sharename+"<br>");
			Share.type='share';
			Share.icon='HD-icon';
			
			#self.ChildNodes.append({
			#	'name':Share.name
			#	,'path':Share.path
			#	,'comment':Share.comment
			#	,'icon':'HD-icon'
			#	,'type':'share'
			#});

		return jsonpickle.encode({"Nodos":Shares},unpicklable=False);
		
	def test(self):
		return jsonpickle.encode(self.model.GetShareList());
